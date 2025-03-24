
import React from 'react';
import { FormField, FormItem, FormControl, FormLabel, FormDescription } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from 'react-hook-form';

interface AdditionalInfoStep1Props {
  form: UseFormReturn<any>;
  title: string;
  labels: {
    family: {
      label: string;
      description: string;
    };
    quebec: {
      label: string;
    };
    jobOffer: {
      label: string;
    };
  };
}

const AdditionalInfoStep1: React.FC<AdditionalInfoStep1Props> = ({ form, title, labels }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-6">{title}</h3>
      
      <div className="space-y-4">
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
                <FormLabel>{labels.family.label}</FormLabel>
                <FormDescription>{labels.family.description}</FormDescription>
              </div>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="quebec"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>{labels.quebec.label}</FormLabel>
              </div>
            </FormItem>
          )}
        />
        
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
                <FormLabel>{labels.jobOffer.label}</FormLabel>
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default AdditionalInfoStep1;
