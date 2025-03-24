
import React from 'react';
import { FormField, FormItem, FormControl, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from 'react-hook-form';

interface AgeStepProps {
  form: UseFormReturn<any>;
  title: string;
  labels: {
    under18: string;
    age1825: string;
    age2635: string;
    age3645: string;
    age4655: string;
    over55: string;
    years: string;
  };
}

const AgeStep: React.FC<AgeStepProps> = ({ form, title, labels }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">{title}</h3>
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
                  <RadioGroupItem value="under18" />
                </FormControl>
                <FormLabel className="font-normal">{labels.under18}</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="18-25" />
                </FormControl>
                <FormLabel className="font-normal">18-25 {labels.years}</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="26-35" />
                </FormControl>
                <FormLabel className="font-normal">26-35 {labels.years}</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="36-45" />
                </FormControl>
                <FormLabel className="font-normal">36-45 {labels.years}</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="46-55" />
                </FormControl>
                <FormLabel className="font-normal">46-55 {labels.years}</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="over55" />
                </FormControl>
                <FormLabel className="font-normal">{labels.over55}</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormItem>
        )}
      />
    </div>
  );
};

export default AgeStep;
