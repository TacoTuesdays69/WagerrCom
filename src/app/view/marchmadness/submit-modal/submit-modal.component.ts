import {Component, OnInit} from '@angular/core';
import {WgrSportsBookService} from "../../../service/wgr-sports-book.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-submit-modal',
  templateUrl: './submit-modal.component.html',
  styleUrls: ['./submit-modal.component.scss']
})
export class SubmitModalComponent implements OnInit {
  confirm: boolean;
  final: any;
  uid: string;

  constructor(
    private wsb: WgrSportsBookService,
    public bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
    this.final = this.wsb.marchMadness;
    this.uid = this.wsb.getUserUID();
  }

  submitBracket(): void {
    const canSubmit = Date.now();
    if (canSubmit < 1616169600000) {
      this.confirm = !this.confirm;
      this.wsb.submitMarchMadnessBracket(this.final);
    }
  }

  getBracketCount(): number {
    return this.wsb.getMarchMadnessBracketCount();
  }

  goFacebook() {
    this.uid = this.wsb.getUserUID();
    const url = encodeURIComponent('https://wagerr.com/marchmadness/ref/' + this.uid);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
    this.wsb.marchMadness = {};
    this.wsb.getMarchMadnessAccount();
    this.bsModalRef.hide();
  }

  goTwitter() {
    this.uid = this.wsb.getUserUID();
    const url = encodeURIComponent('https://wagerr.com/marchmadness/ref/' + this.uid);
    window.open(`https://twitter.com/intent/tweet?text=#MarchMadness Pick'em. $100,000 in prizes! Free bracket entry on #Wagger #Sporstbook. $WGR $BTC #Bitcoin #cryptocurrency #sportsbetting #NCAA #basketball #sports #betting&url=${url}`);
    this.wsb.marchMadness = {};
    this.wsb.getMarchMadnessAccount();
    this.bsModalRef.hide();
  }

  getChampion() {
    return this.final.bracketString.finalFour.roundSeven[0].set[0].name;
  }

  getLoser() {
    const roundSix = this.final.bracketString.finalFour.roundSix[0].set;
    if (!roundSix[0].winner) {
      return roundSix[1].name;
    }
    return roundSix[0].name;
  }

}
