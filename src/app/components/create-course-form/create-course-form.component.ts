import { Component, inject, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { collection } from '@angular/fire/firestore';
import { Firestore } from '@angular/fire/firestore/firebase';
import { addDoc } from 'firebase/firestore';
import { Course } from '../../types';

@Component({
  selector: 'app-create-course-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-course-form.component.html',
  styleUrl: './create-course-form.component.scss',
})
export class CreateCourseFormComponent {
  courseForm!: FormGroup;
  fb = inject(FormBuilder);
  @Output() formSubmit = new EventEmitter<void>();
  firestore = inject(Firestore);
  
  
  constructor() {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  async onSubmit() {
    console.log(this.courseForm.value);
    const collectionRef = collection(this.firestore, 'courses');
    const course: Course = {
      ...this.courseForm.value,
    }
    await addDoc(collectionRef, course);
    console.log('Added a new course');
  }
}
