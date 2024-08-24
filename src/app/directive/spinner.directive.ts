import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSpinner]'
})
export class SpinnerDirective {
  private isLoading = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appSpinner(isLoading: boolean) {
    this.isLoading = isLoading;
    this.updateView();
  }

  private updateView() {
    if (this.isLoading) {
      this.viewContainer.clear(); // Clear any existing view
      this.viewContainer.createEmbeddedView(this.templateRef); // Display the spinner
    } else {
      this.viewContainer.clear(); // Remove the spinner
      this.viewContainer.createEmbeddedView(this.templateRef); // Display the actual content
    }
  }
}


