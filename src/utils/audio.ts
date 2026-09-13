// Audio system permanently silenced as requested
class SoundController {
  public toggleSound(): boolean {
    return false;
  }

  public getSoundState(): boolean {
    return false;
  }

  public playHover(): void {}
  public playClick(): void {}
  public playSuccess(): void {}
  public playKeyType(): void {}
  public playRadarSweep(): void {}
  public playTab(): void {}
  public playBeep(): void {}
}

export const soundManager = new SoundController();
