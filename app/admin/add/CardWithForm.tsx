"use client";
import * as React from "react";
import { nanoid } from "nanoid";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContest } from "@/states/contests";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  ticketPrice: z.string().min(2).max(50),
  type: z.string(),
  totalAmount: z.string().min(2).max(50),
});

export default function CardWithForm() {
  const [contests, addToContest] = useContest((state: any) => [
    state.contests,
    state.addToContest,
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      ticketPrice: "",
      type: "",
      totalAmount: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addToContest({
      id: nanoid(),
      contestName: values.name,
      ticketPrice: Number(values.ticketPrice),
      type: values.type,
      totalAmount: Number(values.totalAmount),
      remainingTickets: 5,
      live: true,
    });
    // values : defaultValues
    form.reset({ name: "", ticketPrice: "", type: "", totalAmount: "" });
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Add new product</CardTitle>
        <CardDescription>Pre approved products by admins</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contest Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter name of the contest"
                      id="name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ticketPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ticket Price</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter ticket price" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="select type of the product" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="cars">cars</SelectItem>
                      <SelectItem value="electronics">electronics</SelectItem>
                      <SelectItem value="property">property</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="totalAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Amount</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter total of the contest"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
