import { Injectable, EventEmitter } from '@angular/core';

import { LoggingService } from '../logging.service';

@Injectable()

export class AccountService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdate = new EventEmitter<string>();

  constructor(private service: LoggingService) { }

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.service.statusLogging(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.service.statusLogging(status);
  }
};
