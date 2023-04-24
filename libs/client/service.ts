import { MockService } from "./mock-service";
import { CiamAuthz } from "./ciam-service";
import { EntitlementsService } from "./entitlements-api/entitlements-service";

export type License = {
  available: number;
  total: number;
};

export type User = {
  id: string;
  name: string;
  assigned: boolean;
};

export type AuthenticatedUser = {
  orgId: string;
  serviceId: string;
  token: () => Promise<string>;
}

export interface LicenseService {
  get(user: AuthenticatedUser): Promise<License>;

  seats(user: AuthenticatedUser, assigned?: boolean): Promise<User[]>;

  assign(user: AuthenticatedUser, userIds: string[]): Promise<void>;

  unAssign(user: AuthenticatedUser, userIds: string[]): Promise<void>;
}

export function getService(serviceKey: string, baseUrl?: string): LicenseService {
  switch (serviceKey) {
    case "CIAM_Authz":
      return new CiamAuthz(baseUrl);
    case "entitlements":
      return new EntitlementsService(baseUrl);
    case "mock":
      return new MockService();
    default:
      throw new Error("no implementation found for " + serviceKey);
  }
}


import { AnonymousAuthenticationProvider } from "@microsoft/kiota-abstractions";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { Authz } from "./api/authz";
import { V1alphaCheckPermissionRequest } from "./api/models";
import { V1alphaCheckPermissionResponse401Error } from "./api/v1alpha/check";
import { CheckRequestBuilderPostRequestConfiguration } from "./api/v1alpha/check/checkRequestBuilderPostRequestConfiguration";

const adapter = new FetchRequestAdapter(new AnonymousAuthenticationProvider());
adapter.baseUrl = "http://localhost:1080";
const client = new Authz(adapter);

export async function checkPermission(): Promise<void> {
  try {
    console.log("Again!");
    const request = new V1alphaCheckPermissionRequest();
    request.subject = "okay";
    request.operation = "use";
    request.resourcetype = "Feature";
    request.resourceid = "Wisdom";

    const requestConfiguration =
      new CheckRequestBuilderPostRequestConfiguration();
    requestConfiguration.headers = { Authorization: ["token"] };

    const result = await client.v1alpha.check.post(request, requestConfiguration);
    console.log(result);
  } catch (err) {
    console.log(err);
    console.log(
      "what",
      (err as V1alphaCheckPermissionResponse401Error).additionalData
    );
  }
}

