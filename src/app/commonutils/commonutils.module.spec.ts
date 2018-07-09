import { CommonutilsModule } from './commonutils.module';

describe('CommonutilsModule', () => {
  let commonutilsModule: CommonutilsModule;

  beforeEach(() => {
    commonutilsModule = new CommonutilsModule();
  });

  it('should create an instance', () => {
    expect(commonutilsModule).toBeTruthy();
  });
});
