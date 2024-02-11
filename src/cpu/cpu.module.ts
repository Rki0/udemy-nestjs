import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports: [PowerModule], // 다른 모듈과 연결할 때 사용. PowerModule에서 exports한 것에 접근 가능해짐
  providers: [CpuService],
  exports: [CpuService],
})
export class CpuModule {}
