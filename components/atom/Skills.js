import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['PHP', 'Perl', 'JavaScript', 'Docker', 'AWS'],
  datasets: [
    {
      data: [100, 100, 100, 100, 100],
      backgroundColor: ['#FF6384', '#8A2BE2', '#FFCE56', '#36A2EB', '#FF7F50'],
      hoverBackgroundColor: ['#FF6384', '#8A2BE2', '#FFCE56', '#36A2EB', '#FF7F50'],
    },
  ],
};

const Skills = () => (
  <div className="my-6">
    <h2 className="text-2xl font-bold text-center">Skill Set</h2>
    <div className="">
      <Doughnut
        data={data}
        width={400}
        height={300}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  </div>
);

export default Skills;
