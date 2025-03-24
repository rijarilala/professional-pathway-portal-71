
import React from 'react';
import { FormField, FormItem, FormControl, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from 'react-hook-form';

interface JobAndFamilyStepProps {
  form: UseFormReturn<any>;
}

const JobAndFamilyStep: React.FC<JobAndFamilyStepProps> = ({ form }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Offre d'emploi validée au Canada ?</h3>
        <FormField
          control={form.control}
          name="jobOffer"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox 
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="font-normal">
                  Oui, j'ai une offre d'emploi validée au Canada
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Avez-vous des liens familiaux au Canada ?</h3>
        <FormField
          control={form.control}
          name="familyInCanada"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox 
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="font-normal">
                  Oui (famille directe : parents, frères/sœurs, enfants)
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default JobAndFamilyStep;
