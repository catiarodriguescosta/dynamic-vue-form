<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router'
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import Button from '@/components/Button.vue';

// reactiveness for conditional logic
const service = ref()

const yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1)


// one schema per step
const schemas = [
  yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().matches(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/, 'Must have at least one number and 8 characters'),
  }),
  yup.object({
    name: yup.string().min(2).required(),
    dateOfBirth: yup.date().notRequired().default(new Date(yesterday)).max(new Date(yesterday), 'Date of birth must be in the past'),
  }),
  yup.object({
    choiceOfService: yup
      .string()
      .required()
      .oneOf(['web_development', 'mobile_development', 'seo_services', 'other']),
    otherService: yup.string().notRequired(),
    terms: yup.bool().required().equals([true]),
  }),
];

const currentStep = ref(0);
const totalNumberOfSteps = schemas.length - 1

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



<style scoped>
.form-container {
  min-width: 60%
  
}
.progress {
  font-size: 36px;
  font-family: 'Playfair Display';
}

</style>

<template>
  <div class="flex justify-center">
    <div class="flex flex-col form-container">
      <span class="progress text-right">{{ currentStep + 1 }} / {{ totalNumberOfSteps + 1 }}</span>
      <Form @submit="nextStep" :validation-schema="currentSchema" keep-values v-slot="{ handleSubmit, values }">
        <template v-if="currentStep === 0">
          <div class="flex flex-col my-4">
            <label for="email">{{ $t('serviceForm.email.label') }}</label>
            <Field name="email" id="email" type="email" />
            <ErrorMessage name="email" />
          </div>

          <div class="flex flex-col my-4">
            <label for="password">{{ $t('serviceForm.password.label') }}</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
          </div>
        </template>

        <template v-else-if="currentStep === 1">
          {{ currentStep }}
          <div class="flex flex-col my-4">
            <label for="name">{{ $t('serviceForm.name.label') }}</label>
            <Field name="name" id="name" />
            <ErrorMessage name="name" />
          </div>

          <div class="flex flex-col my-4">
            <label for="dateOfBirth">{{ $t('serviceForm.dateOfBirth.label') }}</label>
            <Field name="dateOfBirth" type="date" />
            <ErrorMessage name="dateOfBirth" />
          </div>

        </template>

        <template v-else-if="currentStep === 2">
          {{ currentStep }}
          <div class="flex flex-col my-4">
            <label for="choiceOfService">{{ $t('serviceForm.choiceOfService.label') }}</label>
            <Field name="choiceOfService" as="select" v-model="service">
              <option value="web_development">{{ $t('serviceForm.servicesOptions[0]') }}</option>
              <option value="mobile_development">{{ $t('serviceForm.servicesOptions[1]') }}</option>
              <option value="seo_services">{{ $t('serviceForm.servicesOptions[2]') }}</option>
              <option value="other">{{ $t('serviceForm.servicesOptions[3]') }}</option>
            </Field>
            <Field v-if="service === 'other'" as="input" name="otherService"></Field>
            <ErrorMessage name="choiceOfService" />
          </div>
          
          <div class="flex my-4">
            <Field name="terms" type="checkbox" :value="true" />
            <label class="ml-2 pt-3" for="terms">{{ $t('serviceForm.termsAndConditionsCheck.label_part1') }} 
            <RouterLink class="underline"
            :to="$t('serviceForm.termsAndConditionsCheck.link')">{{
              $t('serviceForm.termsAndConditionsCheck.label_part2') }}</RouterLink>
            </label>
            <ErrorMessage name="terms" />
          </div>
        </template>

        <div class="mt-4 inline-flex">
          <!-- Controls -->
          <Button v-if="currentStep !== 0" type="button" @click="prevStep" variant="prev">
            {{ $t('serviceForm.controls[0]') }}
          </Button>
          <Button v-if="currentStep !== totalNumberOfSteps" type="submit" variant="next">
            {{ $t('serviceForm.controls[1]') }}
          </Button>
          <Button v-if="currentStep === totalNumberOfSteps" type="submit" variant="primary">
            {{ $t('serviceForm.controls[2]') }}
          </Button>
        </div>
        <pre>{{ values }}</pre>

      </Form>
    </div>
  </div>
</template>

