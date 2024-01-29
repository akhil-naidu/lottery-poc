import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function CardWithForm() {
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Add new product</CardTitle>
        <CardDescription>Pre approved products by admins</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' placeholder='Name of your product' />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='Type'>Type</Label>
              <Select>
                <SelectTrigger id='Type'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent position='popper'>
                  <SelectItem value='car'>Car</SelectItem>
                  <SelectItem value='bike'>Bike</SelectItem>
                  <SelectItem value='watch'>Watch</SelectItem>
                  <SelectItem value='house'>House</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='contest-name'>Contest Name</Label>
              <Input id='contest-name' placeholder='Name of the contest' />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Button>Add</Button>
      </CardFooter>
    </Card>
  );
}
