// SPDX-FileCopyrightText: © 2019 EteSync Authors
// SPDX-License-Identifier: GPL-3.0-only

import { Platform } from "react-native";

export const appName = "EteSync Notes";
export const homePage = "https://www.etesync.com/";
export const faq = homePage + "faq/";
export const pricing = homePage + "pricing/";
export const sourceCode = "https://github.com/etesync/etesync-notes";
export const reportIssue = sourceCode + "/issues";
export const contactEmail = "contact-notes@etesync.com";
export const reportsEmail = "reports-notes@etesync.com";

export const forgotPassword = faq + "#forgot-password";

export const serviceApiBase = process.env.REACT_NATIVE_DEFAULT_API_PATH ?? "https://api.etebase.com/partner/etesync/";

// In generic mode we don't have anything etesync.com specific (app store guidelines)
export const genericMode = Platform.OS === "ios";


export const colType = "etebase.md.note";
