
import React from 'react';
import { FormField, FormItem, FormControl, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from 'react-hook-form';

interface EducationStepProps {
  form: UseFormReturn<any>;
  title: string;
  labels: {
    highSchool: string;
    diploma: string;
    bachelors: string;
    masters: string;
    phd: string;
  };
}

const EducationStep: React.FC<EducationStepProps> = ({ form, title, labels }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <FormField
        control={form.control}
        name="education"
        render={({ field }) => (
          <FormItem>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="space-y-3"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="highSchool" />
                </FormControl>
                <FormLabel className="font-normal">{labels.highSchool}</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="diploma" />
                </FormControl>
                <FormLabel className="font-normal">{labels.diploma}</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="bachelors" />
                </FormControl>
                <FormLabel className="font-normal">{labels.bachelors}</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="masters" />
                </FormControl>
                <FormLabel className="font-normal">{labels.masters}</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="phd" />
                </FormControl>
                <FormLabel className="font-normal">{labels.phd}</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormItem>
        )}
      />
    </div>
  );
};

export default EducationStep;
