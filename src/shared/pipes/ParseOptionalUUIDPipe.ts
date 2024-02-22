import { ArgumentMetadata, ParseUUIDPipe } from '@nestjs/common';

export class ParseOptionalUUIDPipe extends ParseUUIDPipe {
  override async transform(
    value: string,
    metadata: ArgumentMetadata,
  ): Promise<string> {
    if (typeof value === 'undefined') return undefined;

    return super.transform(value, metadata);
  }
}
