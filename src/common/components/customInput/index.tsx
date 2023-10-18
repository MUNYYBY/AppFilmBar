/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {useForm, Controller} from 'react-hook-form';
import MaskInput from 'react-native-mask-input';
import {launchImageLibrary} from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {InputTypes} from '../../constants/InputTypes';
import {scaleFontSize, scaleSize} from '../../utils/ScaleSheetUtils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ICONS} from '../../constants/Icons';
import Colors from '../../styles/Colors';
import {regexUtils} from '../../utils/RegexUtils';

interface Props {
  placeholder: string;
  secureTextEntry?: boolean;
  rules?: any;
  name?: any;
  control?: any;
  returnKeyType?: any;
  isLeftAccessories?: any;
  isRightAccessories?: any;
  rightAccessoriesOnPress?: any;
  editable?: boolean;
  shouldShowIcon?: boolean;
  title?: any;
  forwordRef?: any;
  onSubmitEditing?: any;
  onFocus?: any;
  inputStyle?: any;
  onBlur?: any;
  value?: any;
  onChange?: any;
  type: string;
  shouldAutoFocus?: boolean;
  shouldShowFlags?: boolean;
  onFlagPress?: any;
  flag?: any;
  shouldShowError?: any;
  isNumeric?: boolean;
}

const CustomInput = (props: Props) => {
  const {
    formState: {errors},
  } = useForm();
  const [isError, setIsError] = useState(false);
  const [showPasswordEye, setShouPasswordEye] = useState(false);
  const [showPasswordData, setShowPasswordData] = useState(false);

  /**
   * Handle Password Eye Click
   */
  const handlePasswordEyeClick = () => {
    setShouPasswordEye(!showPasswordEye);
    setShowPasswordData(!showPasswordData);
  };

  /**
   * Check Input Type
   */
  const checkInputType = () => {
    if (props.type == InputTypes.PHONE_NUMBER_INPUT) {
      return renderPhoneNumberInput();
    } else if (props.type == InputTypes.IMAGE_PICKER_INPUT) {
      return renderImageInput();
    } else if (props.type == InputTypes.DATE_PICKER) {
      return renderDatePickerInput();
    } else {
      return renderOtherInputs();
    }
  };

  /**
   * Render Password Icon
   * @returns
   */
  const renderPasswordEyeIcon = () => {
    return (
      <TouchableOpacity
        style={[
          styles.passwordIconView,
          {
            right: isError ? scaleSize(30) : scaleSize(30),
          },
        ]}
        onPress={handlePasswordEyeClick}>
        <Icon
          name={
            showPasswordEye
              ? ICONS.PASSWORD_EYE_INVISIBLE
              : ICONS.PASSWORD_EYE_VISIBLE
          }
          color={Colors.BLACK_COLOR}
          size={scaleFontSize(25)}
        />
      </TouchableOpacity>
    );
  };

  /**
   * Render Right Accessories
   * @returns
   */
  const renderRightAccessories = () => {
    return (
      <TouchableOpacity
        style={styles.rightAccessoryView}
        onPress={props.rightAccessoriesOnPress}>
        <Image
          source={props.isRightAccessories}
          style={styles.rightAccessoryImage}
        />
      </TouchableOpacity>
    );
  };

  /**
   * Render Left Accessories
   * @returns
   */
  const renderLeftAccessories = () => {
    return (
      <View style={styles.leftAccessoriesVw}>
        <Image
          source={props.isLeftAccessories}
          style={styles.leftAccessoriesImg}
        />
      </View>
    );
  };

  /**
   * Render Phone Number Input Fields
   * @returns
   */
  const renderPhoneNumberInput = () => {
    return (
      <Controller
        control={props.control}
        rules={props.rules}
        name={props.name}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <>
            <View style={styles.mainVw}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.txtContainer}>
                  <Text style={styles.codeTxt}>+1</Text>
                  <MaskInput
                    style={styles.txtInput}
                    //@ts-ignore
                    placeholder={props.placeholder}
                    placeholderTextColor={Colors.GRAY_COLOR}
                    // autoFocus
                    inputMode={'numeric'}
                    defaultValue={props.value}
                    keyboardType={'number-pad'}
                    value={value}
                    onChangeText={(masked: string, unmasked: string) => {
                      onChange(unmasked);
                    }}
                    mask={regexUtils.maskedPhoneNumberRegex}
                  />
                </View>
              </View>
            </View>
          </>
        )}
      />
    );
  };

  /**
   * Render Other Inputs
   * @returns
   */
  const renderOtherInputs = () => {
    return (
      <>
        {props.title && (
          <View style={styles.titleVw}>
            <Text style={styles.titleTxt}>{props.title}</Text>
          </View>
        )}
        <View style={styles.container}>
          {props.isLeftAccessories ? renderLeftAccessories() : null}
          <View
            style={[
              styles.textInputVw,
              {
                paddingLeft: props.isLeftAccessories
                  ? scaleSize(22)
                  : scaleSize(0),
              },
            ]}>
            {handleController()}
          </View>
          {!!props.isRightAccessories ? renderRightAccessories() : null}
        </View>
      </>
    );
  };

  /**
   * Handle Controller Form Hook
   * @returns
   */
  const handleController = () => {
    return (
      <Controller
        control={props.control}
        rules={props.rules}
        render={({
          field: {onChange, onBlur, value},
          fieldState: {error, isDirty},
        }) => (
          <>
            <TextInput
              style={[
                styles.textInput,
                {
                  borderColor: error ? Colors.ERROR_COLOR : Colors.INPUT_BORDER,
                },
                {
                  paddingLeft: props.isLeftAccessories
                    ? scaleSize(20)
                    : scaleSize(15),
                },
              ]}
              onBlur={props.onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={props.placeholder}
              placeholderTextColor={Colors.GRAY_COLOR}
              secureTextEntry={
                props.secureTextEntry ? !showPasswordData : false
              }
              returnKeyType={props.returnKeyType}
              editable={props.editable}
              ref={props.forwordRef}
              onSubmitEditing={props.onSubmitEditing}
              onFocus={props.onFocus}
              keyboardType={props.isNumeric ? 'numeric' : 'default'}
              autoFocus={props.shouldAutoFocus}
            />
            {props.secureTextEntry ? renderPasswordEyeIcon() : null}
            {error?.message &&
            props.shouldShowIcon &&
            props.shouldShowError == undefined ? (
              <>
                {setIsError(true)}
                <View style={[styles.successErrorIconVw]}>
                  <MaterialIcon
                    name={ICONS.ERROR_CIRCLE}
                    color={Colors.ERROR_CHECK_ICON}
                    size={scaleFontSize(16)}
                  />
                </View>
              </>
            ) : (
              <>
                {props.shouldShowIcon &&
                props.shouldShowError === undefined &&
                isDirty ? (
                  <>
                    {setIsError(true)}
                    <View style={[styles.successErrorIconVw]}>
                      <MaterialIcon
                        name={ICONS.SUCCESS_CIRCLE}
                        color={Colors.SUCCESS_CHECK_ICON}
                        size={scaleFontSize(16)}
                      />
                    </View>
                  </>
                ) : null}
              </>
            )}
            {error?.message && props.shouldShowError == undefined ? (
              <View style={styles.errorView}>
                <Text style={styles.errorTxt}>{error?.message || 'Error'}</Text>
              </View>
            ) : null}
          </>
        )}
        name={props.name}
      />
    );
  };

  /**
   * Render Other Inputs
   * @returns
   */
  const renderImageInput = () => {
    return (
      <>
        {props.title && (
          <View style={styles.titleVw}>
            <Text style={styles.titleTxt}>{props.title}</Text>
          </View>
        )}
        <View style={styles.container}>
          {props.isLeftAccessories ? renderLeftAccessories() : null}
          <View
            style={[
              styles.textInputVw,
              {
                paddingLeft: props.isLeftAccessories
                  ? scaleSize(22)
                  : scaleSize(0),
              },
            ]}>
            <HandleControllerImage />
          </View>
          {!!props.isRightAccessories ? renderRightAccessories() : null}
        </View>
      </>
    );
  };

  /**
   * Handle Controller Form Hook
   * @returns
   */
  const HandleControllerImage = () => {
    //** Selected Image */
    const [selectedImage, setSelectedImage] = useState(null);
    async function handleImageOpen(onChange: any) {
      const result: any = await launchImageLibrary({
        mediaType: 'photo',
      });
      // console.log(result);
      onChange(result.assets![0]);
      setSelectedImage(result.assets![0].fileName);
      return true;
    }
    return (
      <Controller
        control={props.control}
        rules={props.rules}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <Pressable
            style={{width: '100%'}}
            onPress={() => handleImageOpen(onChange)}>
            <View
              style={[
                styles.textInput,
                {
                  borderColor: error
                    ? Colors.ERROR_COLOR
                    : Colors.INPUT_BACKGROUND,
                },
                {
                  paddingLeft: props.isLeftAccessories
                    ? scaleSize(20)
                    : scaleSize(15),
                },
                {
                  display: 'flex',
                  justifyContent: 'center',
                },
              ]}>
              <Text style={{color: Colors.GRAY_COLOR}}>
                {selectedImage ? selectedImage : props.placeholder}
              </Text>
            </View>
            <View style={[styles.successErrorIconVw]}>
              {/* <Image
                source={Images.UPLOAD_IMG}
                style={{
                  marginHorizontal: scaleSize(-15),
                  marginVertical: scaleSize(-5),
                  width: scaleSize(20),
                  height: undefined,
                  aspectRatio: 1,
                }}
              /> */}
            </View>
            {error?.message && props.shouldShowError === undefined ? (
              <View style={styles.errorView}>
                <Text style={styles.errorTxt}>{error?.message || 'Error'}</Text>
              </View>
            ) : null}
          </Pressable>
        )}
        name={props.name}
      />
    );
  };

  const renderDatePickerInput = () => {
    return (
      <>
        {props.title && (
          <View style={styles.titleVw}>
            <Text style={styles.titleTxt}>{props.title}</Text>
          </View>
        )}
        <View style={styles.container}>
          {props.isLeftAccessories ? renderLeftAccessories() : null}
          <View
            style={[
              styles.textInputVw,
              {
                paddingLeft: props.isLeftAccessories
                  ? scaleSize(22)
                  : scaleSize(0),
              },
            ]}>
            <HandleDatePicker />
          </View>
          {!!props.isRightAccessories ? renderRightAccessories() : null}
        </View>
      </>
    );
  };
  const HandleDatePicker = () => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    function handleOnChange(onChange: any) {
      onChange(date);
    }
    return (
      <Controller
        control={props.control}
        rules={props.rules}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={(date: any) => {
                setOpen(false);
                handleOnChange(onChange);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
              mode="datetime"
              minimumDate={new Date()}
            />
            <Pressable style={{width: '100%'}} onPress={() => setOpen(true)}>
              <View
                style={[
                  styles.textInput,
                  {
                    borderColor: error
                      ? Colors.ERROR_COLOR
                      : Colors.INPUT_BORDER,
                  },
                  {
                    paddingLeft: props.isLeftAccessories
                      ? scaleSize(20)
                      : scaleSize(15),
                  },
                  {
                    display: 'flex',
                    justifyContent: 'center',
                  },
                ]}>
                <Text style={{color: Colors.GRAY_COLOR}}>
                  {moment(date).format('dddd, DD MMM, yyyy hh:mm a')}
                </Text>
              </View>
              <View style={[styles.successErrorIconVw]}>
                <MaterialIcon
                  name="clock-time-eight-outline"
                  size={24}
                  color={'black'}
                />
              </View>
              {error?.message && props.shouldShowError === undefined ? (
                <View style={styles.errorView}>
                  <Text style={styles.errorTxt}>
                    {error?.message || 'Error'}
                  </Text>
                </View>
              ) : null}
            </Pressable>
          </>
        )}
        name={props.name}
      />
    );
  };

  return checkInputType();
};

export default CustomInput;
