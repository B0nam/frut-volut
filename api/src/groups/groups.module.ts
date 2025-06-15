import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { groupProviders } from './groups.providers';

@Module({
  controllers: [GroupsController],
  providers: [...groupProviders, GroupsService],
})
export class GroupsModule {}
