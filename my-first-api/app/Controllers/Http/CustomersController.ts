import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer'

export default class CustomersController {
  public async index({ response }: HttpContextContract) {
    const customer = await Customer.all()
    response.ok(customer)
  }

  public async store({ request, response }: HttpContextContract) {
    /* A way to save
    const { name, description } = request.post()
    const customer = await Customer.create({
      name: name,
      description: description,
    })
    await customer.save()
    response.ok(customer) */

    // Another simple way to save
    const customerData = request.only(['name', 'description'])
    const customer = await Customer.create(customerData)
    response.created(customer)
  }

  public async show({ response, params }: HttpContextContract) {
    const customer = await Customer.findOrFail(params.id)
    response.ok(customer)
  }

  public async update({ response, request, params }: HttpContextContract) {
    const customer = await Customer.findOrFail(params.id)
    customer.merge(request.only(['name', 'description']))
    await customer.save()
    response.ok(customer)
  }

  public async destroy({ response, params }: HttpContextContract) {
    const customer = await Customer.findOrFail(params.id)
    await customer.delete()
    response.noContent()
  }
}
