import { Injectable, Logger, HttpStatus } from '@nestjs/common';
import { User } from "@packages/shared-prisma/prisma/prisma-client";
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class PostService {
  constructor(
    private prisma: PrismaService,
  ) {}


  async findMany(): Promise<User[] | null> {
    try {
      return await this.prisma.user.findMany();
    } catch (err) {
      throw new Error(err);
    }
  }
}
