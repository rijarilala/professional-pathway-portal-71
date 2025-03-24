
import React from 'react';
import { FormField, FormItem, FormControl, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from 'react-hook-form';

interface LanguageStepProps {
  form: UseFormReturn<any>;
  title: string;
  labels: {
    englishOnly: string;
    frenchOnly: string;
    both: string;
    neither: string;
  };
}

const LanguageStep: React.FC<LanguageStepProps> = ({ form, title, labels }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <FormField
        control={form.control}
        name="language"
        render={({ field }) => (
          <FormItem>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="space-y-3"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="english" />
                </FormControl>
                <FormLabel className="font-normal">{labels.englishOnly}</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="french" />
                </FormControl>
                <FormLabel className="font-normal">{labels.frenchOnly}</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="both" />
                </FormControl>
                <FormLabel className="font-normal">{labels.both}</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="none" />
                </FormControl>
                <FormLabel className="font-normal">{labels.neither}</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormItem>
        )}
      />
    </div>
  );
};

export default LanguageStep;
