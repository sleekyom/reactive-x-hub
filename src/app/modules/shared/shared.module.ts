import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CamelizePipe } from './pipes/camel-case.pipe';
import { SandboxModule } from './sandbox/sandbox.module';

@NgModule({
  declarations: [CamelizePipe],
  imports: [CommonModule, SandboxModule],
  exports: [SandboxModule, CamelizePipe]
})
export class SharedModule {}
