import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comments} from '../../shared/interfaces/comments.interface';

@Component({
  selector: 'fw-comment',
  templateUrl: './fw-comment.component.html',
  styleUrls: ['./fw-comment.component.scss']
})
export class FwCommentComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  selectorName = this.elementRef.nativeElement.tagName.toLowerCase();
  private _comment: Comments;
  @Output() fwReplyChange: EventEmitter<Comments> = new EventEmitter();

  ngOnInit() {}

  onClickReply(event: Event): void {
    event.preventDefault();
    this.fwReplyChange.emit(this.fwComment);
  }

  /* COMMENT */
  @Input()
  set fwComment(value: Comments) {
    this._comment = value;
  }

  get fwComment(): Comments {
    return this._comment;
  }

}
