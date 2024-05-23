<script setup lang="ts">
import { ref,  computed } from 'vue';
import { RouterLink } from 'vue-router'
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';


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
    dateOfBirth: yup.date().default(new Date(yesterday)).max(new Date(yesterday), 'Date of birth must be in the past'),
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
        <label for="email">{{ $t('serviceForm.email.label') }}</label>
        <Field name="email" id="email" type="email" />
        <ErrorMessage name="email" />

        <label for="password">{{ $t('serviceForm.password.label') }}</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />
      </template>

      <template v-if="currentStep === 1">
        <label for="name">{{ $t('serviceForm.name.label') }}</label>
        <Field name="name" id="name" />
        <ErrorMessage name="name" />
        

        <label for="dateOfBirth">{{ $t('serviceForm.dateOfBirth.label') }}</label>
        <Field name="dateOfBirth" type="date"/>
        <ErrorMessage name="dateOfBirth" />

      </template>

      <template v-if="currentStep === totalNumberOfSteps">
        <label for="choiceOfService">{{ $t('serviceForm.choiceOfService.label') }}</label>
        <Field name="choiceOfService" as="select">
          <option value="web_development">{{ $t('serviceForm.servicesOptions[0]') }}</option>
          <option value="mobile_development">{{ $t('serviceForm.servicesOptions[1]') }}</option>
          <option value="seo_services">{{ $t('serviceForm.servicesOptions[2]') }}</option>
          <option value="other">{{ $t('serviceForm.servicesOptions[3]') }}</option>
        </Field>
        <ErrorMessage name="choiceOfService" />

        <Field name="terms" type="checkbox" id="terms" :value="true" />
        <label for="terms">{{ $t('serviceForm.termsAndConditionsCheck.label_part1') }} <RouterLink :to="$t('serviceForm.termsAndConditionsCheck.link')">{{ $t('serviceForm.termsAndConditionsCheck.label_part2') }}</RouterLink></label>
        <ErrorMessage name="terms" />
      </template>

      <!-- Controls -->
      <Button v-if="currentStep !== 0" type="button" @click="prevStep">
        {{ $t('serviceForm.controls[0]') }}
      </Button>
      <Button v-if="currentStep !== totalNumberOfSteps" type="button" @click="nextStep" variant="primary">
        {{ $t('serviceForm.controls[1]') }}
      </Button>
      <Button v-else type="submit" variant="primary">
        {{ $t('serviceForm.controls[2]') }}
      </Button>

    </Form>
  </div>
</template>