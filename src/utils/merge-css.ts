const mergeCss = (...classNames: (string | undefined)[]): string => {
  let result = "";

  classNames.forEach(className => {
    if (typeof className === "undefined") {
      return;
    }

    result = result.concat(`${className} `);
  });

  return result.trim();
};

export default mergeCss;
