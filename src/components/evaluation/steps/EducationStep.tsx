
import React from 'react';
import { FormField, FormItem, FormControl, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from 'react-hook-form';

interface EducationStepProps {
  form: UseFormReturn<any>;
}

const EducationStep: React.FC<EducationStepProps> = ({ form }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Niveau d'études</h3>
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
                  <RadioGroupItem value="none" />
                </FormControl>
                <FormLabel className="font-normal">Aucun diplôme</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="highschool" />
                </FormControl>
                <FormLabel className="font-normal">Diplôme d'études secondaires</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="college" />
                </FormControl>
                <FormLabel className="font-normal">Diplôme postsecondaire (Bac+2)</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="bachelor" />
                </FormControl>
                <FormLabel className="font-normal">Licence (Bac+3)</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="master-phd" />
                </FormControl>
                <FormLabel className="font-normal">Master ou Doctorat</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormItem>
        )}
      />
    </div>
  );
};

export default EducationStep;
