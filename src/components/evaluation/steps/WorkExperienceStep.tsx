
import React from 'react';
import { FormField, FormItem, FormControl, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from 'react-hook-form';

interface WorkExperienceStepProps {
  form: UseFormReturn<any>;
  title?: string;
  labels?: {
    none: string;
    lessThanOne: string;
    oneToThree: string;
    threeToFive: string;
    moreThanFive: string;
  };
}

const WorkExperienceStep: React.FC<WorkExperienceStepProps> = ({ form, title, labels }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">{title || "Expérience professionnelle (en années)"}</h3>
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
                <FormLabel className="font-normal">
                  {labels?.none || "Aucune expérience"}
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="less-than-1" />
                </FormControl>
                <FormLabel className="font-normal">
                  {labels?.lessThanOne || "Moins d'un an"}
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="1-3" />
                </FormControl>
                <FormLabel className="font-normal">
                  {labels?.oneToThree || "1 - 3 ans"}
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="4-5" />
                </FormControl>
                <FormLabel className="font-normal">
                  {labels?.threeToFive || "4 - 5 ans"}
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="5+" />
                </FormControl>
                <FormLabel className="font-normal">
                  {labels?.moreThanFive || "Plus de 5 ans"}
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormItem>
        )}
      />
    </div>
  );
};

export default WorkExperienceStep;
