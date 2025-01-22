import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TEXT, FIND_TEXT, REPLACE_TEXT, CASE_SENSITIVE } from './constants/find-and-replace.constants';

@Component({
	selector: 'find-and-replace',
	templateUrl: './find-and-replace.component.html',
	styleUrls: ['./find-and-replace.component.scss']
})
export class FindAndReplaceComponent {
	public title = 'FindAndReplace';
	public findAndReplaceForm: FormGroup = new FormGroup({
		text: new FormControl('', [Validators.required]),
		findText: new FormControl('', [Validators.required]),
		replaceText: new FormControl('', [Validators.required]),
		caseSensitive: new FormControl(false)
	});

	get text() {
		return this.findAndReplaceForm.get(TEXT);
	}

	get findText() {
		return this.findAndReplaceForm.get(FIND_TEXT);
	}

	get replaceText() {
		return this.findAndReplaceForm.get(REPLACE_TEXT);
	}

	replaceOne(): void {
		this.replaceAndUpdateText();
	}

	replaceAll(): void {
		this.replaceAndUpdateText(true);

	}

	reset(): void {
		this.findAndReplaceForm.reset();
	}

	replaceAndUpdateText(replaceAll: boolean = false): void {
		let flags = '';
		if (!this.findAndReplaceForm.controls[CASE_SENSITIVE].value) {
			flags += 'i';
		}
		if (replaceAll) {
			flags += 'g';
		}
		const regex = new RegExp(this.findAndReplaceForm.controls[FIND_TEXT].value, flags);
		this.findAndReplaceForm.controls[TEXT].setValue(
			this.findAndReplaceForm.controls[TEXT].value.replace(
				regex,
				this.findAndReplaceForm.controls[REPLACE_TEXT].value
			)
		);
	}

	swapFindAndReplaceText() {
		const findText = this.findAndReplaceForm.controls[FIND_TEXT].value ?? '';
		const replaceText = this.findAndReplaceForm.controls[REPLACE_TEXT].value ?? '';
		if (findText || replaceText) {
			this.findAndReplaceForm.controls[FIND_TEXT].setValue(replaceText);
			this.findAndReplaceForm.controls[REPLACE_TEXT].setValue(findText);
		}
	}
}
