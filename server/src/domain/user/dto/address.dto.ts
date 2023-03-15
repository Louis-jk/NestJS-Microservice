import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  address1: string;

  address2: string;

  @IsNotEmpty()
  @IsNumberString()
  zip: string;

  @IsNotEmpty()
  country: string;
}
