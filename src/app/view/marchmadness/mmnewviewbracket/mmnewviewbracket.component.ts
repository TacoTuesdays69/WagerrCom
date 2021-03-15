import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {SubmitModalComponent} from "../submit-modal/submit-modal.component";
import {WgrSportsBookService} from "../../../service/wgr-sports-book.service";
import {QuestionairComponent} from "../questionair/questionair.component";

@Component({
  selector: 'app-mmnewviewbracket',
  templateUrl: './mmnewviewbracket.component.html',
  styleUrls: ['./mmnewviewbracket.component.scss']
})
export class MmnewviewbracketComponent implements OnInit {
  bsModalRef: BsModalRef;
  @Input() new: boolean;
  questionAnswered: boolean;

  baseBracket = [
    {
      name: 'West Region',
      set: [
        {
          set: [
            {
              rank: '1',
              name: 'Gonzaga',
            },
            {
              rank: '16',
              name: 'Norfolk St./Appalachian St.',
            },
          ]
        },
        {
          set: [
            {
              rank: '8',
              name: 'Oklahoma',
            },
            {
              rank: '9',
              name: 'Missouri',
            },]
        },
        {
          set: [
            {
              rank: '5',
              name: 'Creighton',
            },
            {
              rank: '12',
              name: 'UCSB',
            },]
        },
        {
          set: [
            {
              rank: '4',
              name: 'Virginia',
            },
            {
              rank: '13',
              name: 'Ohio',
            },]
        },
        {
          set: [
            {
              rank: '6',
              name: 'USC',
            },
            {
              rank: '11',
              name: 'Wichita ST/Drake',
            },]
        },
        {
          set: [
            {
              rank: '3',
              name: 'Kansas',
            },
            {
              rank: '14',
              name: 'Eastern Washington',
            },]
        },
        {
          set: [
            {
              rank: '7',
              name: 'Oregon',
            },
            {
              rank: '10',
              name: 'VCU',
            },]
        },
        {
          set: [
            {
              rank: '2',
              name: 'Iowa',
            },
            {
              rank: '15',
              name: 'Grand Canyon',
            },
          ]
        },
      ]
    },
    {
      name: 'East Region',
      set: [
        {
          set: [
            {
              rank: '1',
              name: 'Michigan'
            },
            {
              rank: '16',
              name: 'Mount St Mary\'s/Texas Southern',
            },
          ]
        },
        {
          set: [
            {
              rank: '8',
              name: 'LSU',
            },
            {
              rank: '9',
              name: 'St. Bonaventure',
            },]
        },
        {
          set: [
            {
              rank: '5',
              name: 'Colorado',
            },
            {
              rank: '12',
              name: 'Georgetown',
            },]
        },
        {
          set: [
            {
              rank: '4',
              name: 'Florida St.',
            },
            {
              rank: '13',
              name: 'UNC Greensboro',
            },]
        },
        {
          set: [
            {
              rank: '6',
              name: 'BYU',
            },
            {
              rank: '11',
              name: 'Michigan St./UCLA',
            },]
        },
        {
          set: [
            {
              rank: '3',
              name: 'Texas',
            },
            {
              rank: '14',
              name: 'Abilene Christian',
            },]
        },
        {
          set: [
            {
              rank: '7',
              name: 'UConn',
            },
            {
              rank: '10',
              name: 'Maryland',
            },]
        },
        {
          set: [
            {
              rank: '2',
              name: 'Alabama',
            },
            {
              rank: '15',
              name: 'Iona',
            },
          ]
        },
      ]
    },
    {
      name: 'South Region',
      set: [
        {
          set: [
            {
              rank: '1',
              name: 'Baylor',
            },
            {
              rank: '16',
              name: 'Hartford',
            },
          ]
        },
        {
          set: [
            {
              rank: '8',
              name: 'North Carolina',
            },
            {
              rank: '9',
              name: 'Wisconsin',
            },]
        },
        {
          set: [
            {
              rank: '5',
              name: 'Villanova',
            },
            {
              rank: '12',
              name: 'Winthrop',
            },]
        },
        {
          set: [
            {
              rank: '4',
              name: 'Purdue',
            },
            {
              rank: '13',
              name: 'North Texas',
            },]
        },
        {
          set: [
            {
              rank: '6',
              name: 'Texas Tech',
            },
            {
              rank: '11',
              name: 'Utah St.',
            },]
        },
        {
          set: [
            {
              rank: '3',
              name: 'Arkansas',
            },
            {
              rank: '14',
              name: 'Colgate',
            },]
        },
        {
          set: [
            {
              rank: '7',
              name: 'Florida',
            },
            {
              rank: '10',
              name: 'Virginia Tech',
            },]
        },
        {
          set: [
            {
              rank: '2',
              name: 'Ohio St.',
            },
            {
              rank: '15',
              name: 'Oral Roberts',
            },
          ]
        },
      ]
    },
    {
      name: 'Midwest Region',
      set: [
        {
          set: [
            {
              rank: '1',
              name: 'Illinois',
            },
            {
              rank: '16',
              name: 'Drexel',
            },
          ]
        },
        {
          set: [
            {
              rank: '8',
              name: 'Loyola Chicago',
            },
            {
              rank: '9',
              name: 'Georgia Tech',
            },]
        },
        {
          set: [
            {
              rank: '5',
              name: 'Tennessee',
            },
            {
              rank: '12',
              name: 'Oregon St.',
            },]
        },
        {
          set: [
            {
              rank: '4',
              name: 'Oklahoma St.',
            },
            {
              rank: '13',
              name: 'Liberty',
            },]
        },
        {
          set: [
            {
              rank: '6',
              name: 'San Diego St.',
            },
            {
              rank: '11',
              name: 'Syracuse',
            },]
        },
        {
          set: [
            {
              rank: '3',
              name: 'West Virginia',
            },
            {
              rank: '14',
              name: 'Morehead St.',
            },]
        },
        {
          set: [
            {
              rank: '7',
              name: 'Clemson',
            },
            {
              rank: '10',
              name: 'Rutgers',
            },]
        },
        {
          set: [
            {
              rank: '2',
              name: 'Houston',
            },
            {
              rank: '15',
              name: 'Cleveland St.',
            },
          ]
        },
      ]
    }
  ]

  finalScore: any = [];

  userBracket = {
    bracket: {
      'West Region': {
        roundTwo: [
          {
            set: [
              {
                rank: '',
                name: '',
              },
              {
                rank: '',
                name: '',
              }
            ]
          },
          {
            set: [
              {
                rank: '',
                name: '',
              },
              {
                rank: '',
                name: '',
              }
            ]
          },
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          }
        ],
        roundThree: [
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
        ],
        roundFour: [
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          }
        ]
      },
      'East Region': {
        roundTwo: [
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          }
        ],
        roundThree: [
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
        ],
        roundFour: [
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          }
        ]
      },
      'South Region': {
        roundTwo: [
          {
            set: [
              {
                rank: '',
                name: '',
              },
              {
                rank: '',
                name: '',

              }
            ]
          },
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          }
        ],
        roundThree: [
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
        ],
        roundFour: [
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          }
        ]
      },
      'Midwest Region': {
        roundTwo: [
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          }
        ],
        roundThree: [
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
        ],
        roundFour: [
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          }
        ]
      },
      finalFour: {
        roundFive: [
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          },
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          }
        ],
        roundSix: [
          {
            set: [
              {
                rank: '',
                name: '',

              },
              {
                rank: '',
                name: '',

              }
            ]
          }
        ],
        roundSeven: [
          {
            set: [
              {
                rank: '',
                name: '',

              }
            ]
          }
        ]
      }
    },
    final: {
      bracketString: {},
      bracketHash: '',
      home: 0,
      away: 0,
      txid: ''
    }
  }

  constructor(
    private wsb: WgrSportsBookService,
    private modalService: BsModalService,) {
  }

  ngOnInit(): void {
    this.finalScore[0] = 0;
    this.finalScore[1] = 0;
    this.getUserBalance();
    this.wsb.account.subscribe((data: any) => {
      if (data && data.uid) {
        if (!data.settings.email) {
          this.questionair();
        }
      }
    });
  }

  questionair() {
    if (!this.questionAnswered) {
      this.bsModalRef = this.modalService.show(QuestionairComponent,
        // @ts-ignore
        Object.assign({}, {class: 'modal-lg', backdrop: 'static'}));
      this.questionAnswered = true;
    }
  }

  getBracketCount(): number {
    return this.wsb.getMarchMadnessBracketCount();
  }

  getUserBalance(): void {
    const userBalance = this.wsb.getUserBalance();
    if (userBalance == 0) {
      this.wsb.MarchMadnessFaucet();
    }
  }

  userCanSubmit(): boolean {
    const winnerSelected = (this.userBracket.bracket.finalFour.roundSeven[0].set[0].rank != '');
    const hasChampionship = (this.userBracket.bracket.finalFour.roundSix[0].set[0].rank != '' && this.userBracket.bracket.finalFour.roundSix[0].set[1].rank != '')
    const userBalance = this.wsb.getUserBalance();
    console.log('winnerSelected', winnerSelected);
    console.log('hasChampionship', hasChampionship);
    console.log('userBalance', userBalance);
    console.log('this.validateScore()', this.validateScore());
    return (userBalance > 0 && winnerSelected && hasChampionship && this.validateScore());
  }

  validateScore(): boolean {
    const whoIsWinner = (this.userBracket.bracket.finalFour.roundSeven[0].set[0] === this.userBracket.bracket.finalFour.roundSix[0].set[0]);
    if (whoIsWinner) {
      return (this.finalScore[0] >= this.finalScore[1]);
    }
    return (this.finalScore[1] >= this.finalScore[0])
  }

  isSelected(round, i, ti, bracket) {
    let ret = false;
    const roundLook = Math.floor(i / 2);
    if (this.userBracket.bracket[bracket][round][roundLook].set[0] === ti) {
      ret = true;
    }
    if (this.userBracket.bracket[bracket][round][roundLook].set[1] === ti) {
      ret = true;
    }
    return ret;
  }

  roundChangeClear(bracket: string, startRound: string, oldTi: any) {
    const getBracket = this.userBracket.bracket[bracket];
    const finalFour = this.userBracket.bracket.finalFour;
    if (startRound === 'roundTwo') {
      this.clearSet(getBracket.roundThree, oldTi);
      this.clearSet(getBracket.roundFour, oldTi);
      this.clearSet(finalFour.roundFive, oldTi);
      this.clearSet(finalFour.roundSix, oldTi);
      this.clearSet(finalFour.roundSeven, oldTi);
    }
    if (startRound === 'roundThree') {
      this.clearSet(getBracket.roundFour, oldTi);
      this.clearSet(finalFour.roundFive, oldTi);
      this.clearSet(finalFour.roundSix, oldTi);
      this.clearSet(finalFour.roundSeven, oldTi);
    }
    if (startRound === 'roundFour') {
      this.clearSet(finalFour.roundFive, oldTi);
      this.clearSet(finalFour.roundSix, oldTi);
      this.clearSet(finalFour.roundSeven, oldTi);
    }
    if (startRound === 'roundFive') {
      this.clearSet(finalFour.roundSix, oldTi);
      this.clearSet(finalFour.roundSeven, oldTi);
    }
    if (startRound === 'roundSix') {
      this.clearSet(finalFour.roundSeven, oldTi);
    }

  }

  clearSet(brackets, oldTi) {
    for ( let i = 0; i < brackets.length; i++) {
      for (let bi = 0; bi < brackets[i].set.length; bi++) {
        if (brackets[i].set[bi] === oldTi) {
          brackets[i].set[bi] = {rank: '', name: ''};
        }
      }
    }
  }

  baseSelect(basei, i, ti, bracket) {
    let set = 0;
    const round = Math.floor(i / 2);
    if (i & 1) {
      set = 1
    } else {
      set = 0
    }
    this.roundChangeClear(bracket, 'roundTwo', this.userBracket.bracket[bracket].roundTwo[round].set[set]);
    this.userBracket.bracket[bracket].roundTwo[round].set[set] = this.baseBracket[basei].set[i].set[ti]
  }

  roundTwo(i, ti, bracket) {

    let set = 0;
    const round = Math.floor(i / 2);
    if (i & 1) {
      set = 1
    } else {
      set = 0
    }
    if (this.verifyBracket(this.userBracket.bracket[bracket].roundTwo[i].set)) {
      this.roundChangeClear(bracket, 'roundThree', this.userBracket.bracket[bracket].roundThree[round].set[set]);
      this.userBracket.bracket[bracket].roundThree[round].set[set] = this.userBracket.bracket[bracket].roundTwo[i].set[ti]
    }
  }

  roundThree(i, ti, bracket) {
    let set = 0;
    const round = Math.floor(i / 2);
    if (i & 1) {
      set = 1
    } else {
      set = 0
    }
    if (this.verifyBracket(this.userBracket.bracket[bracket].roundThree[i].set)) {
      this.roundChangeClear(bracket, 'roundFour', this.userBracket.bracket[bracket].roundFour[round].set[set]);
      this.userBracket.bracket[bracket].roundFour[round].set[set] = this.userBracket.bracket[bracket].roundThree[i].set[ti]
    }
  }

  roundFour(i, ti, basei, bracket) {
    let set = 0;
    const round = Math.floor(basei / 2);
    if (basei & 1) {
      set = 1
    } else {
      set = 0
    }
    if (this.verifyBracket(this.userBracket.bracket[bracket].roundFour[i].set)) {
      this.roundChangeClear('finalFour', 'roundFive', this.userBracket.bracket.finalFour.roundFive[round].set[set]);
      this.userBracket.bracket.finalFour.roundFive[round].set[set] = this.userBracket.bracket[bracket].roundFour[i].set[ti]
    }
  }

  roundFive(i, ti) {
    let set = 0;
    if (i & 1) {
      set = 1
    } else {
      set = 0
    }
    if (this.verifyBracket(this.userBracket.bracket.finalFour.roundFive[i].set)) {
      this.roundChangeClear('finalFour', 'roundSix', this.userBracket.bracket.finalFour.roundSix[0].set[set]);
      this.userBracket.bracket.finalFour.roundSix[0].set[set] = this.userBracket.bracket.finalFour.roundFive[i].set[ti]
    }
  }

  roundSix(i, ti) {
    let set = 0;
    if (i & 1) {
      set = 1
    } else {
      set = 0
    }
    if (this.verifyBracket(this.userBracket.bracket.finalFour.roundSix[i].set)) {
      this.userBracket.bracket.finalFour.roundSeven[0].set[set] = this.userBracket.bracket.finalFour.roundSix[i].set[ti]
    }
  }

  async roundFinal() {
    const homeFinalScore = this.finalScore[0];
    const awayFinalScore = this.finalScore[1];
    let finalHome: any = this.userBracket.bracket.finalFour.roundSix[0].set[0];
    finalHome.score = homeFinalScore;
    finalHome.winner = (homeFinalScore > awayFinalScore);
    let finalAway: any = this.userBracket.bracket.finalFour.roundSix[0].set[1];
    finalAway.score = awayFinalScore;
    finalHome.winner = (homeFinalScore < awayFinalScore);
    this.userBracket.bracket.finalFour.roundSix[0].set[0] = finalHome;
    this.userBracket.bracket.finalFour.roundSix[0].set[1] = finalAway;
    this.userBracket.final.bracketString = this.userBracket.bracket;
    this.userBracket.final.bracketHash = await this.sha256(JSON.stringify(this.userBracket.bracket));
    this.userBracket.final.home = this.finalScore[0];
    this.userBracket.final.away = this.finalScore[1];
  }

  verifyBracket(set): boolean {
    let ret = true
    if (set[0].name === '') {
      ret = false;
    }
    if (set[1].name === '') {
      ret = false;
    }
    return ret;
  }

  openSubmitBracket(): void {
    this.roundFinal();
    this.wsb.marchMadness = this.userBracket.final;
    this.bsModalRef = this.modalService.show(SubmitModalComponent,
      // @ts-ignore
      Object.assign({}, {class: 'modal-lg', backdrop: 'static'}));
  }

  async sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    return hashHex;
  }

  canSubmit(): boolean {
    const canSubmit = Date.now();
    if (canSubmit < 1616169600000) {
      return true;
    }
    return false;
  }

}
