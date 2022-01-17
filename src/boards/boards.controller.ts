import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  //접근제한자를 생성자 안에서 사용하면 클래스 프로퍼티로 선언된다, private 클래스 안에서만 사용하기위해
  constructor(private boardsService: BoardsService) {}
}
