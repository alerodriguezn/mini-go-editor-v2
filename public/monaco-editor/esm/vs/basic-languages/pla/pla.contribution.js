/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.47.0(69991d66135e4a1fc1cf0b1ac4ad25d429866a0d)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/


// src/basic-languages/pla/pla.contribution.ts
import { registerLanguage } from "../_.contribution.js";
registerLanguage({
  id: "pla",
  extensions: [".pla"],
  loader: () => {
    if (false) {
      return new Promise((resolve, reject) => {
        __require(["vs/basic-languages/pla/pla"], resolve, reject);
      });
    } else {
      return import("./pla.js");
    }
  }
});
