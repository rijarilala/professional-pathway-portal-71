
import React from 'react';
import { FormField, FormItem, FormControl, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from 'react-hook-form';

interface LanguageSkillsStepProps {
  form: UseFormReturn<any>;
}

const LanguageSkillsStep: React.FC<LanguageSkillsStepProps> = ({ form }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Compétences linguistiques</h3>
      
      <div className="mb-6">
        <h4 className="text-md font-medium mb-2">Français</h4>
        <FormField
          control={form.control}
          name="languageFrench"
          render={({ field }) => (
            <FormItem>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="space-y-3"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="fluent" />
                  </FormControl>
                  <FormLabel className="font-normal">Je parle couramment français</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="intermediate" />
                  </FormControl>
                  <FormLabel className="font-normal">Niveau intermédiaire en français</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="none" />
                  </FormControl>
                  <FormLabel className="font-normal">Pas de compétence particulière en français</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormItem>
          )}
        />
      </div>
      
      <div>
        <h4 className="text-md font-medium mb-2">Anglais</h4>
        <FormField
          control={form.control}
          name="languageEnglish"
          render={({ field }) => (
            <FormItem>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="space-y-3"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="fluent" />
                  </FormControl>
                  <FormLabel className="font-normal">Je parle couramment anglais</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="intermediate" />
                  </FormControl>
                  <FormLabel className="font-normal">Niveau intermédiaire en anglais</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="none" />
                  </FormControl>
                  <FormLabel className="font-normal">Pas de compétence particulière en anglais</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default LanguageSkillsStep;
