import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Amount} from '../models';
import {AmountRepository} from '../repositories';

export class DataController {
  constructor(
    @repository(AmountRepository)
    public amountRepository : AmountRepository,
  ) {}

  @post('/amounts')
  @response(200, {
    description: 'Amount model instance',
    content: {'application/json': {schema: getModelSchemaRef(Amount)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Amount, {
            title: 'NewAmount',
            
          }),
        },
      },
    })
    amount: Amount,
  ): Promise<Amount> {
    return this.amountRepository.create(amount);
  }

  @get('/amounts/count')
  @response(200, {
    description: 'Amount model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Amount) where?: Where<Amount>,
  ): Promise<Count> {
    return this.amountRepository.count(where);
  }

  @get('/amounts')
  @response(200, {
    description: 'Array of Amount model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Amount, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Amount) filter?: Filter<Amount>,
  ): Promise<Amount[]> {
    return this.amountRepository.find(filter);
  }

  @patch('/amounts')
  @response(200, {
    description: 'Amount PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Amount, {partial: true}),
        },
      },
    })
    amount: Amount,
    @param.where(Amount) where?: Where<Amount>,
  ): Promise<Count> {
    return this.amountRepository.updateAll(amount, where);
  }

  @get('/amounts/{id}')
  @response(200, {
    description: 'Amount model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Amount, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Amount, {exclude: 'where'}) filter?: FilterExcludingWhere<Amount>
  ): Promise<Amount> {
    return this.amountRepository.findById(id, filter);
  }

  @patch('/amounts/{id}')
  @response(204, {
    description: 'Amount PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Amount, {partial: true}),
        },
      },
    })
    amount: Amount,
  ): Promise<void> {
    await this.amountRepository.updateById(id, amount);
  }

  @put('/amounts/{id}')
  @response(204, {
    description: 'Amount PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() amount: Amount,
  ): Promise<void> {
    await this.amountRepository.replaceById(id, amount);
  }

  @del('/amounts/{id}')
  @response(204, {
    description: 'Amount DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.amountRepository.deleteById(id);
  }
}
