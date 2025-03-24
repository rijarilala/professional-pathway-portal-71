
import React from 'react';
import { FormField, FormItem, FormControl, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from 'react-hook-form';

interface ProjectStepProps {
  form: UseFormReturn<any>;
}

const ProjectStep: React.FC<ProjectStepProps> = ({ form }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Votre projet au Canada</h3>
      
      <div className="space-y-3">
        <FormField
          control={form.control}
          name="projectInCanada"
          render={({ field }) => (
            <FormItem>
              <div className="space-y-3">
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox 
                      checked={field.value?.includes("study")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value || [];
                        return checked 
                          ? field.onChange([...currentValues, "study"]) 
                          : field.onChange(currentValues.filter((value: string) => value !== "study"));
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">Étudier</FormLabel>
                </FormItem>
                
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox 
                      checked={field.value?.includes("work")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value || [];
                        return checked 
                          ? field.onChange([...currentValues, "work"]) 
                          : field.onChange(currentValues.filter((value: string) => value !== "work"));
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">Travailler</FormLabel>
                </FormItem>
                
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox 
                      checked={field.value?.includes("permanent")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value || [];
                        return checked 
                          ? field.onChange([...currentValues, "permanent"]) 
                          : field.onChange(currentValues.filter((value: string) => value !== "permanent"));
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">M'établir de façon permanente</FormLabel>
                </FormItem>
                
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox 
                      checked={field.value?.includes("family")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value || [];
                        return checked 
                          ? field.onChange([...currentValues, "family"]) 
                          : field.onChange(currentValues.filter((value: string) => value !== "family"));
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">Rejoindre un membre de ma famille</FormLabel>
                </FormItem>
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ProjectStep;
