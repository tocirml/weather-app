import { format } from 'date-fns';
import { Axis, Grid, LineSeries, Tooltip, XYChart } from '@visx/xychart';

const tickLabelOffset = 5;

const accessors = {
  xAccessor: d => new Date(d.x),
  yAccessor: d => d.y,
};

const TemperatureGraphic = ({ data }) => {
  return (
    <>
      <XYChart
        height={250}
        margin={{ left: 60, top: 35, bottom: 38, right: 27 }}
        xScale={{ type: 'time' }}
        yScale={{ type: 'linear' }}
      >
        <Grid
          columns={false}
          numTicks={8}
          lineStyle={{
            stroke: '#e1e1e1',
            strokeLinecap: 'round',
            strokeWidth: 1,
          }}
          strokeDasharray="0, 4"
        />
        <Axis
          hideAxisLine
          hideTicks
          orientation="bottom"
          tickLabelProps={() => ({ dy: tickLabelOffset })}
          left={10}
          numTicks={8}
        />
        <Axis
          hideAxisLine
          hideTicks
          orientation="left"
          numTicks={8}
          tickLabelProps={() => ({ dx: -10 })}
        />

        <LineSeries
          stroke="#008561"
          dataKey="primary_line"
          data={data}
          {...accessors}
        />

        <Tooltip
          snapTooltipToDatumX
          snapTooltipToDatumY
          showSeriesGlyphs
          glyphStyle={{
            fill: '#008561',
            strokeWidth: 0,
          }}
          renderTooltip={({ tooltipData }) => {
            return (
              <>
                {Object.entries(tooltipData.datumByKey).map(lineDataArray => {
                  const [key, value] = lineDataArray;

                  return (
                    <div className="row" key={key}>
                      <div className="date">
                        {format(accessors.xAccessor(value.datum), 'MMM d')}
                      </div>
                      <div className="value">
                        {/* <ColoredSquare color="#008561" /> */}
                        {`${accessors.yAccessor(value.datum)}°`}
                      </div>
                    </div>
                  );
                })}
              </>
            );
          }}
        />
      </XYChart>
    </>
  );
};

export default TemperatureGraphic;
