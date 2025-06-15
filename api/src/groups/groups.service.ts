import { ConflictException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Group } from './entities/group.entity';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupsService {
  constructor(
    @Inject('GROUP_REPOSITORY')
    private readonly groupRepository: Repository<Group>,
  ) {}

  async create(createGroupDto: CreateGroupDto): Promise<Group> {
    const group = new Group(
      createGroupDto.nome,
      createGroupDto.descricao,
      createGroupDto.imagem,
      createGroupDto.publico,
      createGroupDto.senha,
    );
    return this.groupRepository.save(group);
  }

  findAll(): Promise<Group[]> {
    return this.groupRepository.find();
  }

  async findOne(uuid: string): Promise<Group> {
    const group = await this.groupRepository.findOneBy({ uuid });

    if (!group) {
      throw new NotFoundException('Group not found');
    }
    return group;
  }

  async update(uuid: string, updateGroupDto: UpdateGroupDto): Promise<Group> {
    const group = await this.findOne(uuid);
    Object.assign(group, updateGroupDto);
    return this.groupRepository.save(group);
  }

  async remove(uuid: string): Promise<void> {
    const result = await this.groupRepository.delete({ uuid });

    if (result.affected === 0) {
      throw new NotFoundException('Group not found');
    }
  }
}
