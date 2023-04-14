import React from "react";
import { AriaTimeFieldProps, TimeValue, useLocale, useTimeField } from "react-aria";
import { DateSegment, useTimeFieldState } from "react-stately";
import { Box } from "../box"
import { DateTimeSegment } from "../datepicker/date-time-segment";
import { Flex } from "../flex";
import { FormLabel } from "../form-label";

export const TimePicker = React.forwardRef((props: AriaTimeFieldProps<TimeValue>, ref) => {
  let { locale } = useLocale();
  let state = useTimeFieldState({
    ...props,
    locale
  });

  let { labelProps, fieldProps } = useTimeField(props, state, ref);

  return (
    <Box
      css={{
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'column'
      }}>
      {
        props.label &&
        <FormLabel {...labelProps} css={{ mb: '3px' }}>{props.label}</FormLabel>
      }
      <Flex {...fieldProps} ref={ref} className="field"
        css={{
          display: 'inline-flex',
          width: 'auto',
          background: '$black50',
          border: 'none',
          padding: '$4 $6',
          borderRadius: '$lg'
        }}
      >
        {state.segments.map((segment: DateSegment, index: number) => (
          <DateTimeSegment
            // eslint-disable-next-line  react/no-array-index-key
            key={`twigs-datetime-segment-${index}`}
            segment={segment}
            state={state}
          />
        ))}
      </Flex>
    </Box>
  )
})