<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { ref,  computed } from 'vue';

import Button from '@/components/Button.vue';

const yesterday = new Date()
yesterday.setDate(yesterday.getDate()-1)

// one schema per step
const schemas = [
  yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().matches(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/, 'Must have at least one number and 8 characters'),
  }),
  yup.object({
    name: yup.string().min(2).required(),
    dateOfBirth: yup.date().default(new Date(yesterday)).max(new Date(yesterday), `Date of birth must be in the past`),
  }),
  yup.object({
    choiceOfService: yup
      .string()
      .required()
      .oneOf(['coffee', 'tea', 'soda'], 'Choose a service'),
    terms: yup.bool().required().equals([true]),
  }),
];

const currentStep = ref(0);
const totalNumberOfSteps = schemas.length-1

const currentSchema = computed(() => {
  return schemas[currentStep.value];
});

const nextStep = () => {
  if (currentStep.value === totalNumberOfSteps) {
    return;
  }
  currentStep.value++;
}

const prevStep = () => {
  if (currentStep.value <= 0) {
    return;
  }
  currentStep.value--;
}
</script>

<template>
  <div>
    <Form
      @submit="nextStep"
      :validation-schema="currentSchema"
      keep-values
      v-slot="{ handleSubmit, values }"
    >
      <template v-if="currentStep === 0">
        <label for="email">Email</label>
        <Field name="email" id="email" type="email" />
        <ErrorMessage name="email" />

        <label for="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />
      </template>

      <template v-if="currentStep === 1">
        <label for="name">Name</label>
        <Field name="name" id="name" />
        <ErrorMessage name="name" />
        

        <label for="dateOfBirth">Date of Birth</label>
        <Field name="dateOfBirth" type="date"/>
        <ErrorMessage name="dateOfBirth" />

      </template>

      <template v-if="currentStep === totalNumberOfSteps">
        <Field name="choiceOfService" as="select">
          <option>Select a drink</option>
          <option value="coffee">Coffee</option>
          <option value="tea">Tea</option>
          <option value="soda">Soda</option>
        </Field>
        <ErrorMessage name="choiceOfService" />

        <label for="terms">Agree to terms and conditions</label>
        <Field name="terms" type="checkbox" id="terms" :value="true" />
        <ErrorMessage name="terms" />
      </template>

      <!-- Controls -->
      <Button v-if="currentStep !== 0" type="button" @click="prevStep">
        Previous
      </Button>
      <Button v-if="currentStep !== totalNumberOfSteps" type="submit" variant="primary">
        Next
      </Button>
      <Button v-if="currentStep === totalNumberOfSteps" type="submit" variant="primary">
        Send
      </Button>
      
    </Form>
  </div>
</template>