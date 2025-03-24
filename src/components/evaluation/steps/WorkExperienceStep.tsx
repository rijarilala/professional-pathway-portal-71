
import React from 'react';
import { FormField, FormItem, FormControl, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from 'react-hook-form';

interface WorkExperienceStepProps {
  form: UseFormReturn<any>;
}

const WorkExperienceStep: React.FC<WorkExperienceStepProps> = ({ form }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Expérience professionnelle (en années)</h3>
      <FormField
        control={form.control}
        name="workExperience"
        render={({ field }) => (
          <FormItem>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="space-y-3"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="none" />
                </FormControl>
                <FormLabel className="font-normal">Aucune expérience</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="less-than-1" />
                </FormControl>
                <FormLabel className="font-normal">Moins d'un an</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="1-3" />
                </FormControl>
                <FormLabel className="font-normal">1 - 3 ans</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="4-5" />
                </FormControl>
                <FormLabel className="font-normal">4 - 5 ans</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="5+" />
                </FormControl>
                <FormLabel className="font-normal">Plus de 5 ans</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormItem>
        )}
      />
    </div>
  );
};

export default WorkExperienceStep;
