const Dynamic = ({ components }: any) => {
  return components.map((component: any) => {
    switch (component.__component) {
      case "content.services":
        return <div></div>;
    }
  });
};

export default Dynamic;
