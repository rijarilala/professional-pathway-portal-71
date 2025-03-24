
import React from 'react';
import { FormField, FormItem, FormControl, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from 'react-hook-form';

interface AgeStepProps {
  form: UseFormReturn<any>;
}

const AgeStep: React.FC<AgeStepProps> = ({ form }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Quel est votre âge ?</h3>
      <FormField
        control={form.control}
        name="age"
        render={({ field }) => (
          <FormItem>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="space-y-3"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="under-18" />
                </FormControl>
                <FormLabel className="font-normal">Moins de 18 ans</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="18-29" />
                </FormControl>
                <FormLabel className="font-normal">18 - 29 ans</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="30-39" />
                </FormControl>
                <FormLabel className="font-normal">30 - 39 ans</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="40-44" />
                </FormControl>
                <FormLabel className="font-normal">40 - 44 ans</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="45+" />
                </FormControl>
                <FormLabel className="font-normal">45 ans et plus</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormItem>
        )}
      />
    </div>
  );
};

export default AgeStep;
