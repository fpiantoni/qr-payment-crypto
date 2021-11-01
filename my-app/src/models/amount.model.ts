import {Entity, model, property} from '@loopback/repository';

@model()
export class Amount extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @property({
    type: 'date',
  })
  description?: string;


  constructor(data?: Partial<Amount>) {
    super(data);
  }
}

export interface AmountRelations {
  // describe navigational properties here
}

export type AmountWithRelations = Amount & AmountRelations;
