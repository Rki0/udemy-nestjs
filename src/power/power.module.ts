import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService], // 하나의 모듈 내에서 사용되는 서비스는 기본적으로 private이다.
  exports: [PowerService], // 따라서 다른 모듈이 서비스를 사용할 수 있으려면 exports를 해줘야한다.
})
export class PowerModule {}
