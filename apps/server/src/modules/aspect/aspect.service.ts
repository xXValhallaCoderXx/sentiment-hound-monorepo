import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AspectService {
  constructor(private prisma: PrismaService) {}
  async getAllAspects(): Promise<any> {
    const getAllAspects = await this.prisma.aspect.findMany();
    console.log('GET ALL ASPECTS: ', getAllAspects);
    // const groupAspects = getAllAspects.reduce((acc: any, curr) => {
    //   const { type, sentiment }: any = curr;
    //   if (acc[type]) {
    //     acc[type].push(sentiment);
    //   } else {
    //     acc[type] = [sentiment];
    //   }
    //   return acc;
    // }, {});

    const groupAspectAndCount = getAllAspects.reduce((acc: any, curr) => {
      const { type, sentiment }: any = curr;
      if (acc[type]) {
        acc[type].count++;
        acc[type][sentiment] = acc[type][sentiment] + 1 || 1;
      } else {
        acc[type] = {
          count: 1,
          [sentiment]: 1,
        };
      }
      return acc;
    }, {});

    return groupAspectAndCount;
  }
}
