import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  findPublic() {
    return this.prisma.project.findMany({
      where: { isPublic: true },
      include: { owner: true },
    });
  }
}