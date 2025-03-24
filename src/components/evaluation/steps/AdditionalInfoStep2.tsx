
import React from 'react';
import { FormField, FormItem, FormControl, FormLabel, FormDescription } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from 'react-hook-form';

interface AdditionalInfoStep2Props {
  form: UseFormReturn<any>;
  title: string;
  labels: {
    study: {
      label: string;
    };
    business: {
      label: string;
    };
    netWorth: {
      label: string;
      description: string;
      options: {
        less50k: string;
        from50kTo150k: string;
        from150kTo300k: string;
        from300kTo500k: string;
        more500k: string;
      };
    };
  };
}

const AdditionalInfoStep2: React.FC<AdditionalInfoStep2Props> = ({ form, title, labels }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-6">{title}</h3>
      
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="studyInCanada"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>{labels.study.label}</FormLabel>
              </div>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="businessExperience"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>{labels.business.label}</FormLabel>
              </div>
            </FormItem>
          )}
        />
      </div>
      
      <div className="mt-6">
        <FormField
          control={form.control}
          name="netWorth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{labels.netWorth.label}</FormLabel>
              <FormDescription>{labels.netWorth.description}</FormDescription>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="space-y-3 mt-2"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="less50k" />
                    </FormControl>
                    <FormLabel className="font-normal">{labels.netWorth.options.less50k}</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="50k150k" />
                    </FormControl>
                    <FormLabel className="font-normal">$50,000 - $150,000</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="150k300k" />
                    </FormControl>
                    <FormLabel className="font-normal">$150,000 - $300,000</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="300k500k" />
                    </FormControl>
                    <FormLabel className="font-normal">$300,000 - $500,000</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="more500k" />
                    </FormControl>
                    <FormLabel className="font-normal">{labels.netWorth.options.more500k}</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default AdditionalInfoStep2;
