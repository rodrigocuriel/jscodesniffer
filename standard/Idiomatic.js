/*
 * @package jscodesniffer
 * @author sheiko
 * @license MIT
 * @copyright (c) Dmitry Sheiko http://www.dsheiko.com
 * @jscs standard:Jquery
 * Code style: http://docs.jquery.com/JQuery_Core_Style_Guidelines
 */

// UMD boilerplate according to https://github.com/umdjs/umd
if (typeof module === "object" && typeof define !== "function") {
    var define = function(factory) {
        module.exports = factory(require, exports, module);
    };
}
/**
 * A module representing a ruleset.
 * @module standard/Idiomatic
 */
define(function() {
    /**
     * Rules based on https://github.com/rwaldron/idiomatic.js/
     * @type {object}
     * @alias module:standard/Idiomatic
     */
    return {
        /*
    defines what characters allowed for line indentation
  */
        "Indentation": {
            // "allowOnlyTabs": true,
            // "allowOnlySpaces": true,
            "disallowMixed": false
        },
        /*
    defines if trailing spaces allowed for lines
  */
        "LineSpacing": {
            "allowLineTrailingSpaces": false
        },
        /*
    defines allowed range for line length
  */
        "LineLength": {
            "allowMaxLength": 80,
            "allowMinLength": 0
        },
        /*
    defines spacing conventions for comma punctuator
    Example:
    // good
    var foo, bar;
    // bad
    var foo , bar;
  */
        "CommaPunctuatorSpacing": {
            "disallowPrecedingSpaces": false
        },
        /*
    defines spacing conventions for semicolon punctuator
    Example:
    // good
    var foo;
    // bad
    var foo ;
  */
        "SemicolonPunctuatorSpacing": {
            "disallowPrecedingSpaces": false
        },

        /*
    defines scoping rules for compound statements

    Example:
    // good
    if ( true ) {
      var foo = "bar";
    }
    // bad
    if ( true ) var foo = "bar";

  */
        "CompoundStatementConventions": {
            "for": [
                "IfStatement",
                "SwitchStatement",
                "WhileStatement",
                "DoWhileStatement",
                "ForStatement",
                "ForInStatement",
                "WithStatement",
                "TryStatement"
            ],
            "requireBraces": true,
            "requireMultipleLines": true
        },
        /*
    defines spacing conventions for unary expressions

    Example:
    !!100 // good
    !! 100 // bad
    */
        "UnaryExpressionIdentifierSpacing": {
            "allowTrailingWhitespaces": 0
        },
        /*
    defines spacing conventions for ternary conditionals

    Example:
    foo = true ? 1 : 0; // good
    foo = true ?1:0; // bad
    */
        "TernaryConditionalPunctuatorsSpacing": {
            "allowTestTrailingWhitespaces": 1,
            "allowConsequentPrecedingWhitespaces": 1,
            "allowConsequentTrailingWhitespaces": 1,
            "allowAlternatePrecedingWhitespaces": 1,
            /*
        Optional modifier.
        When undefined the sniffer treats nesting statements the same
            as regular
        When false, no rules applied for nesting statements
        When defined, the corresponding rules go for nesting statements
        foo( a?b:c )
        */
            "ifNesting": {
                "allowTestTrailingWhitespaces": 0,
                "allowConsequentPrecedingWhitespaces": 0,
                "allowConsequentTrailingWhitespaces": 0,
                "allowAlternatePrecedingWhitespaces": 0
            }
        },
        /*
    defines spacing conventions for empty constructs
    "for" qualifier takes an array of tokens compatible with
    Mozilla Parser AST (https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API)

    Example:
    obj = {}; // good
    obj = {  }; // bad
    */
        "EmptyConstructsSpacing": {
            "for": [
                "ObjectExpression",
                "ArrayExpression",
                "CallExpression"
            ],
            "allowWhitespaces": false
        },
        /*
    defines spacing conventions for object literals

    Example:
    obj = { prop: 1 }; // good
    obj = { prop:1 };// bad
    */
        "ObjectLiteralSpacing": {
            "allowKeyPrecedingWhitespaces": 1,
            "allowKeyTrailingWhitespaces": 0,
            "allowValuePrecedingWhitespaces": 1,
            "allowValueTrailingWhitespaces": 1
        },
        /*
    defines spacing conventions for array literals

    Example:
    arr = [ 1, 2 ]; // good
    arr = [1,2]; // bad
    */
        "ArrayLiteralSpacing": {
            "allowElementPrecedingWhitespaces": 1,
            "allowElementTrailingWhitespaces": 1,
            /*
      Optional modifier.
      "for" qualifier takes an array of tokens compatible with
      Mozilla Parser AST (https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API)
      When qualifier "for" is missing the exception rules gets applied for any node type
      */
            "exceptions": {
                "singleElement": {
                    "for": ["Literal"],
                    "allowElementPrecedingWhitespaces": 0,
                    "allowElementTrailingWhitespaces": 0
                },
                "firstElement": {
                    "for": ["Literal"],
                    "allowElementPrecedingWhitespaces": 1
                },
                "lastElement": {
                    "for": ["Literal"],
                    "allowElementTrailingWhitespaces": 1
                }
            }
        },
        /*
    defines type of quotes to use across the code-base

    Example:
    foo = "text"; // good
    foo = 'text'; // bad
    */
        "QuoteConventions": {
            "allowDoubleQuotes": false,
            "allowSingleQuotes": true
        },
        /*
    defines naming conventions for variables
    Note: variable of all uppercase (including $_0-9) are considered as constants and ignored by the sniffer

    Example:
    var camelCase; // good
    var not_camel_case; // bad
    */
        "VariableNamingConventions": {
            "allowCase": ["camel", "pascal"],
            "allowRepeating": true,
            "allowNumbers": true
        },
        /*
    defines naming conventions for functions

    Example:
    var PascalCase; // good
    var not_camel_or_pascal_case; // bad
    */
        "FunctionNamingConventions": {
            "allowCase": ["camel", "pascal"],
            "allowRepeating": true,
            "allowNumbers": true
        },
        /*
    defines naming conventions for new expressions

    Example:
    obj = new Constructor(); // good
    obj = new constructor(); // bad
    */
        "NewExpressionCalleeNamingConventions": {
            "allowCase": ["pascal"],
            "allowRepeating": true,
            "allowNumbers": true
        },

        /*
    defines spacing conventions for arguments

    Example:
    fn( 1, 2 ); // good
    fn(1,2); // bad
    */
        "ArgumentsSpacing": {
            "allowArgPrecedingWhitespaces": 1,
            "allowArgTrailingWhitespaces": 1,
            /*
        Optional modifier.
       "for" qualifier takes an array of tokens compatible with
        Mozilla Parser AST (https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API)
        When qualifier "for" is missing the exception rules gets applied for any node type
      */
            "exceptions": {
                "singleArg": {
                    "for": ["FunctionExpression", "ArrayExpression", "ObjectExpression"],
                    "allowArgPrecedingWhitespaces": 0,
                    "allowArgTrailingWhitespaces": 0
                },
                "firstArg": {
                    "for": ["FunctionExpression"],
                    "allowArgPrecedingWhitespaces": 0
                },
                "lastArg": {
                    "for": ["FunctionExpression"],
                    "allowArgTrailingWhitespaces": 0
                }
            },
            /*
        Optional modifier.
        When undefined the sniffer treats nesting statements the same
            as regular
        When false, no rules applied for nesting statements
        When defined, the corresponding rules go for nesting statements
        foo( bar(1,1) )
        */
            "ifNesting": {
                "allowArgPrecedingWhitespaces": 0,
                "allowArgTrailingWhitespaces": 0
            }
        },
        /*
    defines spacing conventions for parameters

    Example:
    function fn( foo, bar ){}; // good
    function fn(foo,bar){}; // bad
    */
        "ParametersSpacing": {
            "allowParamPrecedingWhitespaces": 1,
            "allowParamTrailingWhitespaces": 1,
            /*
      Optional modifier.
      When qualifier "for" is missing the exception rules gets applied for any node type
      */
            "exceptions": {
                "singleParam": {
                    "for": ["Literal"],
                    "allowElementPrecedingWhitespaces": 0,
                    "allowElementTrailingWhitespaces": 0
                },
                "firstParam": {
                    "for": ["Literal"],
                    "allowElementPrecedingWhitespaces": 1
                },
                "lastParam": {
                    "for": ["Literal"],
                    "allowElementTrailingWhitespaces": 1
                }
            }
        },
        /*
    defines how methods can be placed when a chain of method calls is too long to fit on one line

    Example:
    // good
    elements
    .addClass( "foo" )
    .children();

    // bad
    elements.addClass( "foo" )
    .children();
    */

        "ChainedMethodCallsPerLineConventions": {
            "requireOnePerLineWhenMultilineCaller": true
        },
        /*
    defines spacing conventions for chains of method calls
    Example:
    // good
    elements.addClass( "foo" )

    // bad
    elements.  addClass( "foo" )
    */
        "ChainedMethodCallsSpacing": {
            "allowPrecedingPropertyWhitespaces": 0
        },
        /*
    defines spacing conventions for operators (including declarator)

    Example:
    foo = 1 + 1; // good
    foo = 1+1; // bad
    */
        "OperatorSpacing": {
            "allowOperatorPrecedingWhitespaces": 1,
            "allowOperatorTrailingWhitespaces": 1
        },
        /*
    defines conventions for variable declarations

    Example:
    // good
    (function(){
      var foo, bar;
    })();

    // bad
    (function(){
      var foo;
      var bar;
    })();
    */
        "VariableDeclarationPerScopeConventions": {
            "disallowMultiplePerBlockScope": true,
            "requireInTheBeginning": true
        },
        /*
    defines conventions for object declarations

    Example:
    // good
    o = { p1: 1, p2: 2 }
    // good
    o = {
      p1: 1,
      p2: 2
    }
    // bad
    o = {
      p1: 1, p2: 2 }
     */
        "ObjectLiteralConventions": {
            "requireOnePerLineWhenMultiline": true
        },
        /*
    defines conventions for array declarations

    Example:
    // good
    arr = [ 1, "two" ]
    // good
    arr = [
      1,
      "two"
    ]
    // bad
    arr = [
      1, "two" ]
    */
        "ArrayLiteralConventions": {
            "requireOnePerLineWhenMultiline": true
        }
    };
});