import { describe, expect, it } from "vitest";
import { ENV } from "./_core/env";

describe("Facebook App Credentials", () => {
  it("should have valid Facebook App ID and Secret configured", () => {
    // Verify App ID is set and is a valid number string
    expect(ENV.facebookAppId).toBeDefined();
    expect(ENV.facebookAppId).toBeTruthy();
    expect(ENV.facebookAppId).toMatch(/^\d+$/);
    
    // Verify App Secret is set and has reasonable length (should be 32+ chars)
    expect(ENV.facebookAppSecret).toBeDefined();
    expect(ENV.facebookAppSecret).toBeTruthy();
    expect(ENV.facebookAppSecret.length).toBeGreaterThan(30);
  });

  it("should have correct App ID value", () => {
    expect(ENV.facebookAppId).toBe("1560540425048584");
  });

  it("should validate Facebook credentials format", () => {
    // App ID should be numeric
    const appIdNum = parseInt(ENV.facebookAppId, 10);
    expect(appIdNum).toBeGreaterThan(0);
    
    // App Secret should be hexadecimal-like (contains only hex chars)
    expect(ENV.facebookAppSecret).toMatch(/^[a-f0-9]{32,}$/i);
  });
});
