import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Amount, AmountRelations} from '../models';

export class AmountRepository extends DefaultCrudRepository<
  Amount,
  typeof Amount.prototype.id,
  AmountRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Amount, dataSource);
  }
}
