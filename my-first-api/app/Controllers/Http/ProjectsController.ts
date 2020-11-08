import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer'
import Project from 'App/Models/Project'

export default class ProjectsController {
  public async index({}: HttpContextContract) {
    const projects = await Project.query().preload('customer')
    return projects.map((project) =>
      project.serialize({
        fields: {
          omit: ['customerId'],
        },
        relations: {
          customer: {
            fields: {
              omit: ['created_at', 'updated_at'],
            },
          },
        },
      })
    )
  }

  public async store({ request, response }: HttpContextContract) {
    // Data
    const projectData = request.only(['name', 'description'])
    const { customerId } = request.post()

    const project = await Project.create(projectData)
    if (customerId) {
      const customer = await Customer.findOrFail(customerId)
      await project.related('customer').associate(customer)
    }
    response.created(project)
  }

  public async show({ params }: HttpContextContract) {
    return await Project.findOrFail(params.id)
  }

  public async update({ request, params }: HttpContextContract) {
    const project = await Project.findOrFail(params.id)
    project.merge(request.all())
    // await project.preload('customer')
    await project.save()
    return project
    /* const project = await Project.findOrFail(params.id)
    project.merge(request.all())
    const { customerId } = request.all()
    const customer = await Customer.findOrFail(customerId)
    await project.save()
    // FIXME: Not the best practise ?
    return Object.assign(
      project.serialize({
        fields: {
          omit: ['customerId'],
        },
      }),
      { customer: customer.serialize() }
    ) */

    /* console.log(project.customer)
    return project.serialize({
      fields: {
        omit: ['customerId'],
      },
      relations: {
        customer: {
          fields: {
            omit: ['created_at', 'updated_at'],
          },
        },
      },
    }) */
  }

  public async destroy({}: HttpContextContract) {}
}
