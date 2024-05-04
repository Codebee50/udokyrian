import { Timeline } from "antd";

const Work = () => {
  return (
    <section className="mt-32">
      <Timeline
        style={{width:'100%'}}
        mode="left"
        items={[
          {
            label: <p className="text-dim-root-txt-color">This label</p>,
            color: "green",
            children: "Create a services site 2015-09-01",
          },
          {
            label:'2024',
            color: "green",
            children: "Create a services site 2015-09-01",
          },
          {
            label:'2025',
            color: "red",
            children: (
              <>
                <p className="w-[300px]">Solve initial network problems 1</p>
                <p>Solve initial network problems 2</p>
                <p>Solve initial network problems 3 2015-09-01</p>
              </>
            ),
          },
          {
            label:'2024',
            children: (
              <>
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </>
            ),
          },
          {
            label:'2024',
            color: "gray",
            children: (
              <>
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </>
            ),
          },
          {
            label:'2024',
            color: "gray",
            children: (
              <>
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </>
            ),
          },
      
        ]}
      />
    </section>
  );
};

export default Work;
